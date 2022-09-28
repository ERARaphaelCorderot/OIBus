const NorthConnector = require('../north-connector')
const { httpSend, addAuthenticationToHeaders } = require('../../service/http-request-static-functions')

/**
 * Class NorthOIConnect - Send files through a POST Multipart HTTP request and values as JSON payload
 * Both endpoints are configurable by the user, allowing to send data to any HTTP application
 * To send data to another OIBus, use the following endpoints:
 *  -files endpoint: /engine/addFile
 *  -values endpoint: /engine/addValues
 */
class NorthOIConnect extends NorthConnector {
  static category = 'Optimistik'

  /**
   * Constructor for NorthOIConnect
   * @constructor
   * @param {Object} configuration - The North connector configuration
   * @param {Object[]} proxies - The list of available proxies
   * @return {void}
   */
  constructor(
    configuration,
    proxies,
  ) {
    super(
      configuration,
      proxies,
    )
    this.canHandleValues = true
    this.canHandleFiles = true

    const {
      host,
      valuesEndpoint,
      fileEndpoint,
      authentication,
      proxy,
    } = configuration.settings
    this.host = host
    this.valuesEndpoint = valuesEndpoint
    this.fileEndpoint = fileEndpoint
    this.authentication = authentication
    this.proxySettings = proxy

    // Initialized at connection or init
    this.valuesUrl = null
    this.fileUrl = null
  }

  /**
   * Initialize services (logger, certificate, status data) at startup
   * @param {String} baseFolder - The base cache folder
   * @param {String} oibusName - The OIBus name
   * @param {Object} defaultLogParameters - The default logs parameters
   * @returns {Promise<void>} - The result promise
   */
  async start(baseFolder, oibusName, defaultLogParameters) {
    await super.start(baseFolder, oibusName, defaultLogParameters)
    const name = `${oibusName}:${this.name}`
    this.valuesUrl = `${this.host}${this.valuesEndpoint}?name=${name}`
    this.fileUrl = `${this.host}${this.fileEndpoint}?name=${name}`
  }

  /**
   * Handle values by sending them to the specified endpoint
   * @param {Object[]} values - The values to send
   * @returns {Promise<void>} - The result promise
   */
  async handleValues(values) {
    const data = JSON.stringify(values)
    const headers = { 'Content-Type': 'application/json' }
    if (this.authentication) {
      addAuthenticationToHeaders(
        headers,
        this.authentication.type,
        this.authentication.key,
        await this.encryptionService.decryptText(this.authentication.secret),
      )
    }

    await httpSend(
      this.valuesUrl,
      'POST',
      headers,
      data,
      this.cacheSettings.timeout,
      this.proxyAgent,
    )
  }

  /**
   * Handle the file by sending it to the specified endpoint.
   * @param {String} filePath - The path of the file
   * @returns {Promise<void>} - The result promise
   */
  async handleFile(filePath) {
    const headers = {}
    if (this.authentication) {
      addAuthenticationToHeaders(
        headers,
        this.authentication.type,
        this.authentication.key,
        await this.encryptionService.decryptText(this.authentication.secret),
      )
    }
    await httpSend(
      this.fileUrl,
      'POST',
      headers,
      filePath,
      this.cacheSettings.timeout,
      this.proxyAgent,
    )
  }

  /**
   * Overriding parent method to detect if the connector should retry to send the values/files or discard them
   * @param {Object} error - The error thrown by the handleFile / handleValue method
   * @returns {Boolean} - If the values/files must be sent again or not
   */
  shouldRetry(error) {
    if (!error.responseError) {
      // Error from the library, because the endpoint is not reachable for example. In this case we must retry indefinitely
      this.logger.trace('Should retry because of connection error.')
      return true
    }
    // Otherwise, check the HTTP status code
    const retry = [400, 500].includes(error.statusCode)
    this.logger.trace(`Should retry ${retry} because of error status code: ${error.statusCode}.`)
    return retry
  }
}

module.exports = NorthOIConnect
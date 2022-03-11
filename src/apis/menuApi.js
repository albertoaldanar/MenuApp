
import URL from './url';

class Api {

    async getMenu(id) {
        const conf = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-KEY': "c3ba8c2613d3988d3329f116ad27ab82"
            },
            timeout: 30000
        }

        function checkStatus(response) {
            if (response.status >= 200 && response.status < 300 || response.status == 422) {
                return response
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }
        function parseJSON(response) {
            return response.json()
        }

        var query = {}

        console.log('url',`${URL}4069227273988039/`)
        console.log('conf', conf)
 
        await fetch(`${URL}4069227273988039/`, conf)
            .then(checkStatus)
            .then(parseJSON)
            .then(function (data) {
                query = data
            }).catch(function (error) {
                if (error.message == 'Network request failed') {
                    query = {
                        meta: {
                            status: 'ERROR',
                            error: {
                                title: 'Error de conexión',
                                mesagge: 'Por favor revise su conexión a internet y vuelva a intentarlo mas tarde'
                            }
                        }
                    }
                }
                else {
                    query = {
                        meta: {
                            status: 'ERROR',
                            error: {
                                title: 'Ups...',
                                mesagge: 'Por el momento este servicio no esta disponible, vuelva a intentarlo mas tarde,'
                            }
                        }
                    }
                }

                return query

            });
        return query
    }

}

export default new Api();

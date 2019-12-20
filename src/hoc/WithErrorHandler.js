import React, { Component, Fragment } from 'react'

import Modal from '../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        
        constructor(props) {
            super(props)
            
            this.state = {
                error: null
            }

            this.errorHandler()
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorHandler() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(null, error => {
                this.setState({ error: error })
            })
        }

        confirmErrorHandler = () => {
            this.setState({ error: null })
        }

        render () {
            return (
                <Fragment>
                    <Modal
                        showModal={this.state.error}
                        title="Error"
                        message="An error occurred"
                        handleModal={this.errorConfirmedHandler} />

                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}

export default withErrorHandler
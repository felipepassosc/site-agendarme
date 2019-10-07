import React, { Component } from 'react'
import googleplay from './googleplay.png'
import appstore from './appstore.png'
import futeba from './futeba.svg'

class BoraCorrer extends Component {
    render() {
        return (
            <div className="bg-light bdone">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="font-weight-bold display-1 text-primary">Bora Correr</h1>
                            <h5 className="font-weight-bold text-dark display-4">A solução de forma rápida para gerenciar seu estabelecimento.</h5>
                        </div>
                        <div className="col-6">
                            <img src={futeba} className="img-fluid imgcalendar" alt="Imagem responsiva" />
                        </div>
                    </div>
                    {/* <div className="row">
                            <h6 className="font-weight-bold text-dark display-5 text-center embreve">Em breve</h6>
                        </div> */}
                    <div className="row store">
                        <div className="col-2">
                            <img src={googleplay} className="img-fluid" alt="Imagem responsiva" />
                        </div>
                        <div className="col-2">
                            <img src={appstore} className="img-fluid" alt="Imagem responsiva" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoraCorrer;
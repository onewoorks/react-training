import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: props.data,
            qty: 1,
            view_style: props.viewStyle
        }
    }

    handle_change = (event) => {
        this.setState({
            qty: event.target.value
        })
    }

    view_style = () => {
        if(this.props.viewStyle){
            console.log('card style')
        } else {
            console.log('list style')
        }
    }

    list_style = () => {
        if(this.props.viewStyle){
            return this.grid_style()
        } else {
            return this.list_a_style()
        }
        
    }

    list_a_style = () => {
        return(
            <div className="card">
                <div className="row">
                    <div className="col-3">
                        <img src={this.state.info.photo} className="img-thumbnail" alt={this.state.info.name} />
                    </div>
                    <div className="col-6">
                        <div>{this.state.info.name}</div>
                        <div>RM {this.state.info.price.toFixed(2)} </div>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control"/>
                        <button className="btn btn-primary btn-block btn-sm"
                        
                        >Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }

    grid_style = () => {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <figure>
                            <img alt={this.state.info.name} src={this.state.info.photo} className="img-fluid" />
                        </figure>
                    </div>
                    <div className="card-footer text-center" style={{ fontSize: 12 }}>
                        <div className="row" >
                            <div className="col-6">{this.state.info.name}</div>
                            <div className="col-6">RM {this.state.info.price.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-4">
                                <input type="text" className="form-control form-control-sm text-center" 
                                value={this.state.qty} 
                                onChange={ this.handle_change} />
                            </div>
                            <div className="col-8">
                                <button className="btn btn-primary btn-sm"
                                    onClick={this.props.click.bind(this, this.props.data, this.state.qty)}
                                    disabled={this.state.qty > this.state.info.quantity }
                                >Add To Cart</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

    render(){
        return this.list_style()
    }
}
import React from 'react'
import { connect } from 'react-redux'


class Login extends React.Component{

    do_login = (e) => {
        e.preventDefault()
        console.log('dspat login')
        this.props.login()
    }

    render(){
        return(
            <div>
                <form action={this.do_login}>
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control"/>
                            </div>

                            <div className="form-group text-right">
                                <button className="btn btn-primary" onClick={this.do_login}>Login</button>
                            </div>

                            <div>
                                {this.props.username}
                            </div>

                            <div>
                                {this.props.password}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch({type:'LOGIN', username: 'iwang@gmail.com', password: '1234'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
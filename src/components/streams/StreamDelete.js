import React, { Component } from 'react'
import history from '../../history'
import Modal from '../Modal'
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class StreamDelete extends Component {

    id = this.props.match.params.id

    componentDidMount(){
        fetchStream(this.id)
    }

    renderAction = () => (
        <div>
            <button onClick={() => this.props.deleteStream(this.id)} className='ui negative button'>Delete</button>
            <Link to='/' className='ui button'>Cancel</Link>
        </div>
    )
    
    renderBody = () => {
        if(!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        }
        return <>Are you sure you want to delete this stream with title= <strong>{this.props.stream.title}</strong></>
    }

    render(){
        return (
            <div>
                StreamDelete
                <Modal 
                    title='Delet Stream'
                    body={this.renderBody()}
                    action={this.renderAction()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }

}

const mapStateToProps = (state,ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps,{ fetchStream, deleteStream })(StreamDelete)
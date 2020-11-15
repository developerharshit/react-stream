import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

export class StreamList extends Component {
    componentDidMount(){
        this.props.fetchStreams()
    }

    renderAdmin = (stream) => {
        if(stream.userId === this.props.currentUserId){
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>Delete</Link>
                </div>
            )
        }
    }

    renderCreateStreamButton = () => {
        if(this.props.isSignedIn){
            return <Link to='/streams/new' className='ui button primary right floated'>Create Stream</Link>
        }
    }
    
    renderlist = () => {
        return this.props.streams.map(stream => {
            return(
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        <Link to={`streams/${stream.id}`}>{stream.title}</Link>
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            )
        })
    }
 
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>{this.renderlist()}</div> 
                {this.renderCreateStreamButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {
    fetchStreams
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)

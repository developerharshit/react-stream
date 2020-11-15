import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

export class StreamShow extends Component {
    
    id = this.props.match.params.id

    componentDidMount(){
        this.props.fetchStream(this.id)
    }

    render() {
        if(!this.props.stream){
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream

        return (
            <div>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

const mapDispatchToProps = {
    fetchStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow)


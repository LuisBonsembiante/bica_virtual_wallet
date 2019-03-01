import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Icon} from 'react-native-elements'


class Main extends Component {



    render() {

        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
                rightComponent={{ icon: 'notifications', color: '#fff' }}
            />
        );
    }


}


const mapStateToProps = (state) => {

    return {...state};
};

export default connect(mapStateToProps, {})(Main);
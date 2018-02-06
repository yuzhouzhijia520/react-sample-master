import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TodosStore from './TodosStore';

const RETURN_KEY_CODE = 13;
const style = {
    marginRight: 20,
};
class NewTodo extends React.Component {
    
    constructor() {
        super();
        this.styles = {
            spacing: {
                float: 'left',
                width: '30%',
                margin: '3%'
            },
            prompt: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: 16,
                lineHeight: '16px'
            }
        };
    }
    
    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();
            if (text == '') {
                return;
            }
            TodosStore.add(event.target.value.trim());
            
            // clear input
            event.target.value = '';
        }
    }
    
    render() {
        const style = {
            margin: 12,
        };
        return (
            <div style={this.styles.spacing} >
                <RaisedButton label="点我" style={style} />
                <FloatingActionButton style={style}>
                    <ContentAdd />
                </FloatingActionButton>
                <p style={this.styles.prompt}>The program to react-demo from PS</p>
                <TextField 
                    onKeyDown={this.onKeyDown} 
                    hintText="PS test"
                    fullWidth={true}
                />
            </div>
        );
    }
}

export default NewTodo;
import React, {Component} from 'react';


class ClassExample extends Component {


    constructor() {
        super();
        this.state = {
            buttonText: 'To jest tekst buttona',
            buttonClass: 'bg-red'
        }
    }

    changeText = () => {
        this.setState({buttonText: 'Zmieniłam tekst'});
    }

    //Cykle życia komponentu//
    //stworzenie 
    componentDidMount() {
        console.log('działa metoda po zamontowaniu');
    }
    //zmiana
    componentDidUpdate() {
        console.log('komponent zaktualizowany');
    }
    //pożegnanie
    componentWillUnmount() {
        console.log('Cześć znikam');
    }

    


    render() {
        return <button className={this.state.buttonClass} onClick={this.changeText}>{this.state.buttonText}</button>;
    }

}

export default ClassExample;
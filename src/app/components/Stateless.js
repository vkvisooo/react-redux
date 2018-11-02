import React from 'react';

export class StatelessComponent extends React.Component {
    changeState(e) {
        console.log(e.target.value)
        this.props.childChange(e.target.value)
    }
    click() {
        const arr = [10, 12, 15, 21];
        const arr1 = [];
        for (var i = 0; i < arr.length; i++) {
            // using the ES6 let syntax, it creates a new binding
            // every single time the function is called
            // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads

            console.log('The index of this number is: ' + i);
            arr1.push(i);
        }
        console.dir(arr1)
        // console.log(arr1.map((ar) => ar()))
        this.props.childChange("check again");
    }
    componentDidMount() {
        // Example of event delegation 
        //no need to bind click to every signle item using for loop
        // let UL = document.getElementById("UL");
        // UL.addEventListener('click', function (e) {
        //     console.log(e.target.nodeName);
        //     if (e.target && e.target.nodeName == "LI") {
        //         console.log();
        //     }
        // })
        //normal event binding
        let li = document.getElementsByClassName("LI");
        let myfuncdebounce = this.debounce(this.myfunc, 3000);
        let obj = [1, 2]
        for (let item of li) {
            item.addEventListener('click', this.myfunc)
        }
    }
    myfunc(a, b) {
        console.log("debounce function is fired" + a + " " + b)
        console.log(this.innerHTML)
    }
    debounce(fn, delay) {
        let timer = null;
        return function () {
            let context = this;
            console.log(context)
            let arg = arguments;
            console.dir(arg)
            clearTimeout(timer);
            timer = setTimeout(() => {
                //console.log(this);
                fn.apply(context, arg)
            }, delay)
        }
    }

    componentWillMount() {
        var array = [1, 2, 3, 4, 5];
        for (var i = 0; i < array.length; i++) {

        }
    }

    render() {
        return (
            <div>
                <p>This component is {this.props.name}</p>
                <input type="text" value={this.props.text} onChange={(event) => this.changeState(event)} />
                <button className="btn btn-primary" onClick={this.click.bind(this)}>Change the text from here</button>
                <ul id="UL">
                    <li className="LI">First</li>
                    <li className="LI">Second</li>
                    <li className="LI">Third</li>
                    <li className="LI">Fourth</li>
                    <li className="LI">Fifth</li>
                    <li className="LI">Sixth</li>
                </ul>
            </div>
        )
    }


}
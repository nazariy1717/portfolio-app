import React, { Component } from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        this.canvas = '';
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.halfX = this.width / 2;
        this.halfY = this.height / 2;
        this.canvasInit = this.canvasInit.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {
        this.canvasInit();
        this.raf();
    }

    canvasInit(){
        this.canvas = this.refs.canvas;
        let ctx = this.canvas.getContext('2d');

    }

    raf(){

        window.requestAnimationFrame(this.raf);
    }

    render(){

        return(
            <div>
                <canvas ref="canvas" width={this.width} height={this.height}>

                </canvas>
            </div>
        )
    }
}
export default Home;

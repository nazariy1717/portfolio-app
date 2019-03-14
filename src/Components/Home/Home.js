import React, { Component } from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        this.canvas = '';
        this.ctx = '';
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.halfX = this.width / 2;
        this.halfY = this.height / 2;

        this.lines = [];
        this.linesNumber = 4;
        this.vertices = 100;
        this.radius = 200;
        this.color = '#342132';

        this.canvasInit = this.canvasInit.bind(this);
        this.update = this.update.bind(this);
        this.renderAnimation = this.renderAnimation.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {
        this.canvasInit();
        this.raf();
    }

    canvasInit(){
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext('2d');
        for(let i=0; i < this.linesNumber; i++){
            this.lines[i] = [];
            for(let j=0; j <= this.vertices; j++){
                let point = {
                    x: Math.cos(j/this.vertices * Math.PI*2),
                    y: Math.sin(j/this.vertices * Math.PI*2),
                };
                point._x = point.x;
                point._y = point.y;
                this.lines[i].push(point);
            }
        }
        console.log(this.lines);


    }

    update(){
        for (let i=0; i < this.linesNumber; i++){
            for (let j=0; j <= this.vertices; j++){
                this.lines[i][j].x = this.lines[i][j]._x * this.radius * (1 - i/10);
                this.lines[i][j].y = this.lines[i][j]._y* this.radius * (1 - i/10);
            }
        }
    }

    renderAnimation(){
        this.ctx.clearRect(0,0,this.width, this.height);
        this.ctx.strokeStyle = this.color;

        for (let i=0; i < this.linesNumber; i++){
            for (let j=1; j <= this.vertices; j++){
                this.ctx.beginPath();
                this.ctx.moveTo(this.halfX + this.lines[i][j-1].x, this.halfY + this.lines[i][j-1].y);
                this.ctx.lineTo(this.halfX + this.lines[i][j].x, this.halfY + this.lines[i][j].y);
                this.ctx.stroke();
            }
        }
    }

    raf(){
        this.update();
        this.renderAnimation();
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

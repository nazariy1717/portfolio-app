import React, { Component } from 'react';
import SimplexNoise from 'simplex-noise';
class Home extends Component{

    constructor(props){
        super(props);
        this.canvas = '';
        this.ctx = '';
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.halfX = (this.width / 2) / 2;
        this.halfY = this.height / 2;

        this.lines = [];
        this.linesNumber = 4;
        this.vertices = 100;
        this.radius = 175;
        this.color = '#fdc029';
        this.simplex = new SimplexNoise();
        this.noise = 0;
        this.time = 0;

        this.mouseX = 0;
        this.mouseY = 0;

        this.mfx = 0;
        this.mfy = 0;

        this.canvasInit = this.canvasInit.bind(this);
        this.update = this.update.bind(this);
        this.renderAnimation = this.renderAnimation.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {
        this.canvasInit();
        this.raf();
        document.addEventListener('mousemove', this.mouseMove);
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
                    width: 4
                };
                point._x = point.x;
                point._y = point.y;
                this.lines[i].push(point);
            }
        }
    }

    update(){

        this.mfx +=0.05 * (this.mouseX/ this.halfX - this.mfx);
        this.mfy +=0.05 * (this.mouseY/ this.halfY - this.mfy);


        for (let i=0; i < this.linesNumber; i++){
            for (let j=0; j <= this.vertices; j++){

                this.noise = this.simplex.noise2D(this.lines[i][j]._x/2 + this.time*0.003, this.lines[i][j]._y/2+ this.time*0.003);
                this.lines[i][j].x = this.lines[i][j]._x * this.radius * (1 - i/10) + this.noise * this.radius/10;
                this.lines[i][j].y = this.lines[i][j]._y* this.radius * (1 - i/10) + this.noise * this.radius/10;

                this.lines[i][j].x = this.lines[i][j].x - this.mfx * this.radius*i/25;
                this.lines[i][j].y = this.lines[i][j].y - this.mfy * this.radius*i/25;

                let koef = this.lines[i][j].x * this.mfx + this.lines[i][j].y * this.mfy;
                this.lines[i][j].width = 4 + 4*koef/200;
            }
        }
    }

    renderAnimation(){
        this.ctx.clearRect(0,0,this.width, this.height);
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = this.color;

        for (let i=0; i < this.linesNumber; i++){
            for (let j=1; j <= this.vertices; j++){
                this.ctx.beginPath();
                this.ctx.lineWidth = this.lines[i][j].width < 1 ? 1 :  this.lines[i][j].width ;
                this.ctx.moveTo(this.halfX + this.lines[i][j-1].x, this.halfY + this.lines[i][j-1].y);
                this.ctx.lineTo(this.halfX + this.lines[i][j].x, this.halfY + this.lines[i][j].y);
                this.ctx.stroke();
            }
        }
    }

    mouseMove(e){
        this.mouseX = e.clientX - this.halfX;
        this.mouseY = e.clientY - this.halfY;
    }

    raf(){
        this.time++;
        this.update();
        this.renderAnimation();
        window.requestAnimationFrame(this.raf);
    }

    render(){
        let divStyle = {
            color: 'white',
            backgroundColor: '#171820',
        };
        return(
            <div style={divStyle}>
                <canvas ref="canvas" width={this.width} height={this.height}>

                </canvas>
            </div>
        )
    }
}
export default Home;

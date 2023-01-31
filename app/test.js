class Matrix {
    constructor(xMin, xMax, yMin, yMax) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xDim = xMax - xMin + 1;
        this.yDim = yMax - yMin + 1;

        // create empty 2d empty array of size xDim x yDim
        this.matrix = new Array(this.xDim);
        for (let x = 0; x < this.xDim; x++) {
            this.matrix[x] = new Array(this.yDim);
        }
    }

    fill(fun) {
        // fill area <= function
        for (let x = 0; x < this.xDim; x++) {
            for (let y = 0; y < this.yDim; y++) {
                let isFilled = false;
                if (fun(x + this.xMin) >= (y + this.yMin)) {
                    isFilled = true;
                }
                this.matrix[x][y] = isFilled;
            }
        }
    }

    display(symbol) {
        let output = "";
        // print each row from top down
        for (let y = this.yDim - 1; y > -1; y--) {
            for (let x = 0; x < this.xDim; x++) {
                if (this.matrix[x][y]) {
                    output += "% ";
                } else {
                    output += symbol + " ";
                }
            }
            output += ` ${y}\n`;
        }
        console.log(output);
    }
}

function fun(x) {
    return x / 2 + 3;
}

let m = new Matrix(0, 10, 0, 10);
m.fill(fun);
m.display(".");
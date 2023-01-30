class Matrix {
    constructor(xMin, xMax, yMin, yMax) {
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
        this.matrix = [];
    }

    fill(fun) {
        for (let x = this.xMin; x < this.xMax + 1; x++) {
            this.matrix.push([]);

            for (let y = this.yMin; y < this.yMax + 1; y++) {
                let value = 0;
                if (fun(x) >= y) {
                    value = 1;
                }
                this.matrix[x - this.xMin].push(value);
            }
        }
    }

    display(symbol) {
        let output = "";
        for (let y = this.yMax; y > this.yMin - 1; y--) {
            for (const row of this.matrix) {
                if (row[y] == 1) {
                    output += symbol + "";
                } else {
                    output += "\u{2796}";
                }
            }
            output += "\n";
        }
        console.log(output);
    }
}

function fun(x) {
    return 4 - x / 3;
}

const m = new Matrix(0, 10, 0, 10);
m.fill(fun);
m.display("\u{2b50}");
const readline = require("readline-sync");

class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    scan() {
        this.x = Number(readline.question("Nhập hoành độ: "));
        this.y = Number(readline.question("Nhập tung độ: "));
    }

    print() {
        console.log("Điểm A có tọa độ là " + "(" + this.x + "," + this.y + ")");
    }

    print2() {
        console.log("Điểm B có tọa độ là " + "(" + this.x + "," + this.y + ")");
    }

    move() {
        let dx = Number(readline.question("Nhập độ dời trên trục hoành mong muốn của điểm"));
        let dy = Number(readline.question("Nhập độ dời trên trục tung mong muốn của điểm"));
        let newVertical = this.y + dx;
        let newHorizontal = this.x + dy;
        console.log("Điểm A dời sang vị trí khác là " + "(" + newHorizontal + "," + newVertical + ")");
    }

    getDistance() {
        
    }
}

function main() {
    let p1 = new Point2D(4, 7);
    let p2 = new Point2D(3, 9);
    p1.scan();
    p1.print();
    // p2.scan();
    // p2.print2();
    p1.move();
    // p2.move();
    const d = p1.getDistance(p2);

}

class Circle {
    constructor(Point2D, r) {
        this.r = r;
    }

    scanCircle() {
        this.r = Number(readline.question("Nhập bán kính hình tròn: "));
    }

    printCircle() {
        console.log("Hình tròn có tâm là " + Point2D + "và bán kính là " + this.r);
    }
}

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    scanRectangle() {
        this.length = Number(readline.question("Nhập chiều dài của hình chữ nhật"));
        this.width = Number(readline.question("Nhập chiều rộng của hình chữ nhật"));
    }

    printRectangle() {
        // console.log("Hình chữ nhật có tọa độ góc trái trên là " + "(" + this.x + "," + this.y + ")");
        console.log("Hình chữ nhật có chiều dài là " + this.length + "và chiều rộng là " + this.width);
    }
    move() {
        let dx = Number(readline.question("Nhập độ dời trên trục hoành mong muốn của điểm"));
        let dy = Number(readline.question("Nhập độ dời trên trục tung mong muốn của điểm"));
        let newVertical = this.y + dx;
        let newHorizontal = this.x + dy;
        console.log("Điểm A dời sang vị trí khác là " + "(" + newHorizontal + "," + newVertical + ")");
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    scanSquare() {
        this.side = Number(readline.question("Nhập chiều dài cạnh hình vuông"));
    }

    printSquare() {
        console.log("Hình vuông có cạnh là " + this.side);
    }

    move() {
        let dx = Number(readline.question("Nhập độ dời trên trục hoành mong muốn của điểm"));
        let dy = Number(readline.question("Nhập độ dời trên trục tung mong muốn của điểm"));
        let newVertical = this.y + dx;
        let newHorizontal = this.x + dy;
        console.log("Điểm A dời sang vị trí khác là " + "(" + newHorizontal + "," + newVertical + ")");
    }
    
    getAreaSquare() {
        return this.side ** this.side;
    }
}

function mainCircle() {
    let c = new Circle()
}

function mainRectangle() {
    let hinhChuNhat = new Rectangle(7, 1);
    hinhChuNhat.scanRectangle();
    hinhChuNhat.printRectangle();
    hinhChuNhat.move();
}

function mainSquare() {
    let hinhVuong = new Square(2);
    hinhVuong.scanSquare();
    hinhVuong.printSquare();
    hinhVuong.move();
    hinhVuong.getAreaSquare();
}

main();
mainCircle();
mainRectangle();
mainSquare();
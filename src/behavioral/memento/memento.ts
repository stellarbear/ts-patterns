export class Memento {
    constructor(
        public lives: number = 3,
        public bullets: number = 10
    ) { }
}

export class CareTaker {
    states: Memento[] = [];
    save(s: Memento) {
        this.states.push(s);
    }
    load() {
        return this.states.pop()
    }
}

export class Hero {
    lives: number = 3
    bullets: number = 10

    constructor(private readonly history: CareTaker) { }
    shoot() {
        this.bullets--;
    }
    die() {
        this.lives--;
    }
    info() {
        console.log('hero stats')
        console.log('lives:', this.lives)
        console.log('bullets:', this.bullets)
    }

    save() {
        this.history.save(new Memento(this.lives, this.bullets));
    }
    load() {
        let { lives, bullets } = this.history.load()!;
        this.bullets = bullets;
        this.lives = lives;
    }
}

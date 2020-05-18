export class Singleton {
    private static instance: Singleton;

    private constructor(private count: number = 0) { }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance
    }

    getCount() {
        this.count++;
        return this.count;
    }
}
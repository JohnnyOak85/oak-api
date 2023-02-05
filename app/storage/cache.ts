export default class LocalCache {
    private map = new Map();
    private prefix: string;

    constructor(id: string) {
        this.prefix = id;
    }

    private getList = () => this.map.get(`${this.prefix}:list`);

    public get = <T>(key: string): Promise<T> =>
        new Promise(resolve => resolve(this.map.get(`${this.prefix}:${key}`) as T));

    public getAll = <T>(key: string): Promise<T[]> =>
        new Promise(resolve => {
            const list: string[] = this.map.get(`${this.prefix}:list`);

            if (!list) {
                resolve([]);
            }

            const items = list.filter(item => item === key).map(item => this.map.get(item));

            resolve(items as T[]);
        });

    public put = (key: string, value: any): Promise<number> =>
        new Promise(resolve => {
            this.map.set(`${this.prefix}:${key}`, value);

            if (!this.getList()) {
                this.map.set(`${this.prefix}:list`, [key]);
            } else {
                const list = this.getList();

                list.push(key);

                this.map.set(`${this.prefix}:list`, list);
            }

            resolve(1);
        });
}

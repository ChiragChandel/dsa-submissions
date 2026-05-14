class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        let arr = this.keyStore.get(key);
        let l = 0, r = arr.length - 1;
        while(l <= r){
            var mid = Math.floor((l + r) / 2);
            if(arr[mid][1] == timestamp) return arr[mid][0];
            if(arr[mid][1] < timestamp){
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
        }
        return r >= 0 ? arr[r][0] : "";
    }
}

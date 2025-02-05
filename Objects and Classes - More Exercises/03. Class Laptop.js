class Laptop{
        isOn = false;
        constructor(info, quality) {
            this.info = info;
            this.quality = quality;
        }
        get price(){
            return (800 - this.info.age * 2 + this.quality * 0.5);
        }
        turnOn(){
            this.isOn = true;
            this.quality--;
            return this.isOn;
        }
        turnOff(){
            this.isOn = false;
            this.quality--;
            return this.isOn;
        }
        showInfo(){
            return JSON.stringify({
                'producer': this.info.producer,
                'age': this.info.age,
                'brand': this.info.brand,
            });
        }
    }
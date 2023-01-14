const Band = require("./band");

class BandList {

  constructor() {
    this.bands = [
      new Band('Metallica'),
      new Band('Bon Jovi'),
      new Band('Los Nocheros'),
    ];
  }

  addBand(name) {
    const newBand = new Band(name);

    this.bands.push(newBand);
    return this.bands;
  }

  removeBand(id) {
    this.bands = this.bands.filter(band => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  increaseVotes(id) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes += 1;
      }
      return band;
    });
  }

  changeName(id, name) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.name = name;
      }
      return band;
    });
  }
}

module.exports = BandList;
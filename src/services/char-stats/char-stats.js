export class CharStats {
  constructor(name, count, charDepth) {
    this.name = name;
    this.matchCount = count;
    this.charDepth = charDepth;
  }

  getName() {
    return this.name;
  }

  getMatchCount() {
    return this.matchCount;
  }

  getCharDepth() {
    return this.charDepth;
  }
}

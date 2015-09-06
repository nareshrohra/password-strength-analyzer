export class CryptoMath {
  static caculateSearchSpaceSize(spaceDepth, spaceLength) {
    if (spaceLength === 1) {
      return spaceDepth;
    } else {
      return Math.pow(spaceDepth, spaceLength) + CryptoMath.caculateSearchSpaceSize(spaceDepth, spaceLength - 1);
    }
  }
}

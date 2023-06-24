export function capitalizeFirstLetter(string){
    return string.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function imgLoaded(imgElement) {
    return imgElement.complete && imgElement.naturalHeight !== 0;
  }

  /**
   * creates a range of slides to be present in real DOM-tree (some to the left, some to the right)
   * @param {*} amount = 5
   * @returns [-2, -1, 0, 1, 2]
   */
export function makeRange(amount = 5){
    const output = [];
    for(let i = -amount; i <= amount; i++){
        output.push(i);
    }
    return output;
}
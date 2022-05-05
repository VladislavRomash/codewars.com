var Ball = function (ballType) {
    return this.ballType = ballType ? ballType : 'regular'
};

Ball()
Ball("super")
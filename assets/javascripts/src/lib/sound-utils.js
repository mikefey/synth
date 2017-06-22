export default {
  createImpulseResponse(audioContext, duration, decay = 2.0, reverse) {
    const sampleRate = audioContext.sampleRate;
    const length = sampleRate * duration;
    const impulse = audioContext.createBuffer(2, length, sampleRate);
    const impulseL = impulse.getChannelData(0);
    const impulseR = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const n = reverse ? length - i : i;
      impulseL[i] = ((1 - (n / length)) ** decay);
      impulseR[i] = ((1 - (n / length)) ** decay);
    }

    return impulse;
  },
};

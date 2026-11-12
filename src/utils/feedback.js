// Tiny optional UI confirmation tone. Called only after a user interaction.
export function playSoftTone(){
  try{
    const AudioContext=window.AudioContext||window.webkitAudioContext;
    if(!AudioContext)return;
    const ctx=new AudioContext();
    const now=ctx.currentTime;
    [659.25,880].forEach((frequency,index)=>{
      const oscillator=ctx.createOscillator();
      const gain=ctx.createGain();
      oscillator.type="sine";
      oscillator.frequency.value=frequency;
      gain.gain.setValueAtTime(0,now+index*.095);
      gain.gain.linearRampToValueAtTime(.045,now+index*.095+.015);
      gain.gain.exponentialRampToValueAtTime(.001,now+index*.095+.13);
      oscillator.connect(gain);gain.connect(ctx.destination);
      oscillator.start(now+index*.095);oscillator.stop(now+index*.095+.14);
    });
    window.setTimeout(()=>ctx.close(),400);
  }catch{/* Audio is optional; never interrupt the UI. */}
}

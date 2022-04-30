for(let i=0; i<9; i++) {
  for(let j=0; j<9; j++) {
    if(j>i) continue;
    process.stdout.write((i+1)+"*"+(j+1)+"="+((i+1)*(j+1))+"\t");
  }
  process.stdout.write("\n");
}
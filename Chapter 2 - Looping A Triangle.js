/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
/*

let output = "";

for (let count = 0; count < 7; count++)
{
  output = output + "#";
  console.log(output);
}

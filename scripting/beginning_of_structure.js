// b.OP_0();
b.OP_1();

// if 0 on stack, else statement, if 1 the if
// turns out the hexBytes assumes you are passing in literal Hex Bytes

b.OP_IF();
    b.hexBytes("5374616e666f7264");  // hex for Stanford
b.OP_ELSE();
    b.hexBytes("5468656f646f7265");  // hex for Theodore
b.OP_ENDIF();

b.OP_SHA256();

// b.hexBytes("71cdd1b9b53bf44f491cbca41da75b190745beee2116815ee67c6436419b4754");
b.hexBytes("bf90d29a5ccb2df544441fe986ac53325b6cb8de08a88ad83790bdb41f8c28c3");

b.OP_EQUAL();

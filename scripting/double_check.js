// these are all scripts that can be ran on bitide

// pushing two constants to the stack
b.constant(1).tag("v_1");
b.constant(2).tag("v_2");

b.OP_ADD()

// pushing 3 (the answer) to the stack
b.constant(3).tag("v_3");
b.OP_EQUAL();

// b.OP_OR();


// getting another 'challenge' set up here
b.constant(40).tag("v_4");
b.constant(47).tag("v_5");
b.OP_MIN()
b.constant(40).tag("v_6");

// by running op_equal twice, we are verifying the first ran correctly as well
b.OP_EQUAL();
b.OP_EQUAL();
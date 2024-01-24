// I want to be able to take a secret, get it's hash, and check it against a known hash

// define the preimage

// <"this is the data that needs to be hashed">#PREIMAGE
b.constant("this is the data that needs to be hashed");

b.OP_HASH256();

// define the hash we are looking for
b.hexBytes("9d3b7f25c1c6b7c30423618af9f7523f4ebb7bcdad427dd6b371ce52f3c7a3b8");

// verify equality
b.OP_EQUAL();

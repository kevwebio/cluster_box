# Cluster Box 
Using parametric JSCAD to develop 3D-printable parts for easily stacking various shaped thin clients in a self-contained edge cluster that can fit into a bookshelf cubby

### Wait what
- designed for the HP t540 and Dell Wyse 5070 (both standard and extended version), but should fit any similar shapes, and parameters can be modified easily in the browser
  - other generations or similar models that are the same dimensions should work without modification
- intended for stacks of homogenous nodes, but if different types of thin clients are similar enough in LxW then it should still work as-is with just some spacers around the smaller-sized node(s)

### Ok but how
- corner pieces that cup around each box (8x pieces each), allowing the thin clients to be easily stacked
- 4 vertical support rods running through the corners of the stack, securing each node
- an X-shaped top-mounted plate that holds a 5-port switch (currently using the MT7621A EVB from Hi-Link), and accomodates stacks of various thin client dimensions (LxW)
- the nodes' power bricks are considered out of scope for now
  - though for a homogeneous cluster it wouldn't be too hard to develop a "power layer" to more efficiently split a large DC power supply among each thin client (if you're ok with the single point of failure, cost, and effort)
    - this can also be designed with an onboard backup power source to deliver UPS functionality with some low cost DC-DC solutions, and further developed for solar input if anyone is feeling particularly ambitious

# Development Status
### pre-pre-...-pre-pre-alpha

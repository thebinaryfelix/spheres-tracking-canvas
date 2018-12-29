# spheres-tracking-canvas
A simple demonstration of how to monitor collisions using spherical objects in Canvas.

[Take a look!](https://thebinaryfelix.github.io/spheres-tracking-canvas/)

## Concept
Usually, when we see moving objects on a screen, we don't fully comprehend how they're linked together.

Every collision between two objects in space can be described with coordinates as being vertices of a triangle. That way, you can monitor the collisions using precise coordinates.

### Description

In this example, you can actually see this "imaginary" triangle by clicking the control buttons below the canvas. It may give you a more clear vision on how you can validate collisions between objects in you animation.

The *Hypotenuse*: Red line connecting the spheres **center** is our determinant factor in a collision.

If the length of the *hypotenuse* is **equal** to the *radius of sphere 1* **+** *radius of sphere 2* => collision!

You can use three buttons to visualize its movement more easily:

- Toggle Animation
- Toggle Triangle Sides
- Toggle Hypotenuse

Go ahead and give [it a try!](https://thebinaryfelix.github.io/spheres-tracking-canvas/)

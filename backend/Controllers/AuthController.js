    import bcrypt from "bcryptjs";
    import jwt from "jsonwebtoken";
    import User from "../Models/AuthModel.js";

    // ================= REGISTER =================

    const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log("Register:", name, email);

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
        return res.status(400).json({
            message: "User already exists",
        });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
        name,
        email,
        password: hashedPassword,
        });

        // Create JWT
        const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
        );

        return res.status(201).json({
        message: "User registered successfully",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
        });

    } catch (error) {
        console.error("Register error:", error);

        return res.status(500).json({
        message: "Server error",
        error: error.message,
        });
    }
    };


    // ================= LOGIN =================

    const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Login:", email);

        // 1. Find user
        const user = await User.findOne({ email });

        if (!user) {
        return res.status(400).json({
            message: "Invalid credentials",
        });
        }

        // 2. Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
        return res.status(400).json({
            message: "Invalid credentials",
        });
        }

        // 3. Create JWT
        const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
        );

        // 4. Send response
        return res.status(200).json({
        message: "User logged in successfully",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
        message: "Server error",
        error: error.message,
        });
    }
    };


    // Export both controllers
    export { registerUser, loginUser };
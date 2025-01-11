export const signup = async(req,res) =>{
    try {
        const {fullname,userName,password,confirmPassword,gender} = req.body;
    } catch (error) {
        
    }
}

export const login = (req,res) =>{
    console.log("login route");
    res.send("login route");

}

export const logout = (req,res) =>{
    console.log("logout route");
    res.send("logout route");

}
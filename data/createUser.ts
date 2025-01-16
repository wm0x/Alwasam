import bcrypt from "bcryptjs";
import { db } from "@/lib/db";  // Make sure this path is correct

// Utility function to hash passwords before saving to the database
const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Function to create a new user with all related data (roles, permissions, branch, etc.)
export const createUser = async (userData: {
  username: string;
  password: string;
  phone?: string;
  national_id?: string;
  name?: string;
  email?: string;
  image?: string;
  salary?: string;  // Or use Decimal type depending on how it's passed
  jobTitle?: string;
  startDate?: Date;
  department?: string;
  branchId?: string;
  roles: string[]; // Role IDs
  permissions: string[]; // Permission IDs
}) => {
  try {
    // Step 1: Hash the password
    const hashedPassword = await hashPassword(userData.password);

    // Step 2: Create the user
    const newUser = await db.user.create({
      data: {
        username: userData.username,
        password: hashedPassword,  // Use the hashed password
        phone: userData.phone,
        national_id: userData.national_id,
        name: userData.name,
        email: userData.email,
        image: userData.image,
        salary: userData.salary ? parseFloat(userData.salary) : undefined,
        jobTitle: userData.jobTitle,
        startDate: userData.startDate,
        department: userData.department,
        branchId: userData.branchId,

        // Step 3: Assign roles
        roles: {
          connect: userData.roles.map((roleId) => ({ id: roleId })),
        },

        // Step 4: Assign permissions
        permissions: {
          connect: userData.permissions.map((permissionId) => ({ id: permissionId })),
        },
      },
    });

    console.log("User created successfully:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

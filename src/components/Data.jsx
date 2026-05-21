import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsers() {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.log("Error:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const styles = {
        container: {
            minHeight: "100vh",
            padding: "40px",
            fontFamily: "Segoe UI, sans-serif",
            background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
            textAlign: "center",
        },
        title: {
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "30px",
            color: "#222",
        },
        loading: {
            fontSize: "18px",
            color: "#555",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
        },
        card: {
            background: "#fff",
            padding: "20px",
            borderRadius: "18px",
            textAlign: "left",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            borderLeft: "5px solid #4a90e2",
            transition: "0.3s",
            cursor: "pointer",
        },
        name: {
            color: "#000",   // ✅ BLACK NAME
            marginBottom: "10px",
        },
        text: {
            color: "#555",
            margin: "6px 0",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>User List</h1>

            {loading ? (
                <p style={styles.loading}>Loading users...</p>
            ) : (
                <div style={styles.grid}>
                    {users.map((user) => (
                        <div
                            key={user.id}
                            style={styles.card}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.boxShadow =
                                    "0 15px 35px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0px)";
                                e.currentTarget.style.boxShadow =
                                    "0 10px 25px rgba(0,0,0,0.1)";
                            }}
                        >
                            <h2 style={styles.name}>{user.name}</h2>
                            <p style={styles.text}>📧 {user.email}</p>
                            <p style={styles.text}>🏙️ {user.address.city}</p>
                            <p style={styles.text}>📞 {user.phone}</p>
                            <p style={styles.text}>🌐 {user.website}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}    

export default Data;
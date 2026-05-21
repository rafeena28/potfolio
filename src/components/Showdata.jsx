import React from "react";

function Showdata({users}){
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

}
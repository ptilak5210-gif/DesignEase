import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography, message, Layout } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Content } = Layout;

// ✅ API URL from environment variable
const API_URL = import.meta.env.VITE_API_URL;

export default function Signup() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                message.success("Account created successfully! Please log in.");
                navigate("/login");
            } else {
                message.error(data.message || "Signup failed");
            }
        } catch (error) {
            console.error("Signup error:", error);
            message.error("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout style={{
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            backgroundImage: `radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 0% 50%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 100% 50%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 0% 100%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(339,49%,30%,1) 0, transparent 50%)`,
            backgroundColor: "#2a2a2a",
            position: "relative",
            overflow: "hidden"
        }}>
            <div style={{ position: "absolute", top: "10%", right: "10%", width: "300px", height: "300px", background: "linear-gradient(180deg, #F4D03F 0%, #16A085 100%)", borderRadius: "50%", filter: "blur(80px)", opacity: 0.5 }}></div>
            <div style={{ position: "absolute", bottom: "10%", left: "10%", width: "400px", height: "400px", background: "linear-gradient(180deg, #00C9FF 0%, #92FE9D 100%)", borderRadius: "50%", filter: "blur(100px)", opacity: 0.5 }}></div>

            <div style={{ position: "absolute", top: "20px", left: "40px" }}>
                <h1 style={{ color: "rgba(255,255,255,0.9)", margin: 0, fontWeight: 300, fontSize: "24px" }}>DesignEase</h1>
            </div>

            <Content style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", zIndex: 1 }}>
                <Card style={{
                    width: 400,
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                }} variant="borderless">

                    <div style={{ textAlign: "center", marginBottom: 30 }}>
                        <Title level={2} style={{ color: "#fff", marginBottom: 5 }}>Create Account</Title>
                        <Text style={{ color: "rgba(255,255,255,0.7)" }}>Sign up to get started</Text>
                    </div>

                    <Form
                        name="signup_form"
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: "Please input your Username!" }]}
                        >
                            <Input
                                prefix={<UserOutlined style={{ color: "rgba(255,255,255,0.7)" }} />}
                                placeholder="Username"
                                size="large"
                                style={{
                                    background: "rgba(255,255,255,0.2)",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "10px"
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: "Please input your Email!" },
                                { type: "email", message: "Please enter a valid email!" }
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined style={{ color: "rgba(255,255,255,0.7)" }} />}
                                placeholder="Email"
                                size="large"
                                style={{
                                    background: "rgba(255,255,255,0.2)",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "10px"
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Please input your Password!" }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined style={{ color: "rgba(255,255,255,0.7)" }} />}
                                placeholder="Password"
                                size="large"
                                style={{
                                    background: "rgba(255,255,255,0.2)",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "10px"
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="default"
                                htmlType="submit"
                                block
                                size="large"
                                loading={loading}
                                style={{
                                    borderRadius: "10px",
                                    background: "rgba(255,255,255,0.8)",
                                    color: "#333",
                                    fontWeight: "bold",
                                    border: "none"
                                }}
                            >
                                Sign Up
                            </Button>
                        </Form.Item>

                        <div style={{ textAlign: "center" }}>
                            <Text style={{ color: "rgba(255,255,255,0.7)" }}>
                                Already have an account?{" "}
                                <Link to="/login" style={{ color: "#fff", fontWeight: "bold" }}>
                                    Log in
                                </Link>
                            </Text>
                        </div>

                    </Form>
                </Card>
            </Content>
        </Layout>
    );
}

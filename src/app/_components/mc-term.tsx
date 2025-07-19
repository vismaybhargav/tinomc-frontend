"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ScrollArea } from "../../components/ui/scroll-area"
import { Badge } from "../../components/ui/badge"
import { Send, Terminal, Loader2, Trash2, Server } from "lucide-react"

interface CommandResponse {
    command: string
    output: string
    timestamp: string
    success: boolean
}

export default function MinecraftCommandInterface() {
    const [command, setCommand] = useState("")
    const [responses, setResponses] = useState<CommandResponse[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const sendCommand = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!command.trim()) return

        setIsLoading(true)
        const timestamp = new Date().toLocaleTimeString()

        // Simulate API delay
        // API = 
        const res = await fetch("http://:3000/api/rcon", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                command: command
            }),
        })

        if (!res.ok) {
            const newResponse: CommandResponse = {
                command: command.trim(),
                output: "Failed",
                timestamp,
                success: false
            }
            setResponses((prev) => [...prev, newResponse])
            setIsLoading(false)
            setCommand("")
        }
        // await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000))
        // const mockResponse = getMockResponse(command.trim())

        const responseFromServer = await res.json() as { ok: boolean, reply: string }

        const newResponse: CommandResponse = {
            command: command.trim(),
            output: responseFromServer.reply,
            timestamp,
            success: responseFromServer.ok,
        }

        setResponses((prev) => [...prev, newResponse])
        setIsLoading(false)
        setCommand("")
    }

    const clearHistory = () => {
        setResponses([])
    }

    const commonCommands = [
        "/list",
        "/say Hello everyone!",
        "/tp Steve Alex",
        "/gamemode creative",
        "/time set day",
        "/weather clear",
    ]

    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
            {/* Server Status */}
            <Card>
                <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Server Status</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Online
                    </Badge>
                </CardContent>
            </Card>

            {/* Main Console */}
            <Card className="bg-slate-900 border-slate-700">
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-green-400">
                        <Terminal className="w-5 h-5" />
                        Minecraft Server Console
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Command History */}
                    <ScrollArea className="h-96 w-full rounded-md border border-slate-700 bg-black p-4">
                        <div className="space-y-2 font-mono text-sm">
                            {responses.length === 0 ? (
                                <div className="text-slate-500">
                                    Ready to execute commands. Type a command below and press Enter or click Send.
                                    <br />
                                    <br />
                                    Try some common commands:
                                    <br />• /list - Show online players
                                    <br />• /say [message] - Broadcast a message
                                    <br />• /tp [player] [target] - Teleport players
                                    <br />• /gamemode [mode] - Change game mode
                                </div>
                            ) : (
                                responses.map((response, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="text-yellow-400">
                                            [{response.timestamp}] {">"} {response.command}
                                        </div>
                                        <div className={`pl-4 whitespace-pre-wrap ${response.success ? "text-green-300" : "text-red-400"}`}>
                                            {response.output}
                                        </div>
                                        {index < responses.length - 1 && <div className="h-2" />}
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>

                    {/* Command Input */}
                    <form onSubmit={sendCommand} className="flex gap-2">
                        <div className="flex-1 relative">
                            <Input
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                placeholder="Enter Minecraft server command (e.g., /list, /say Hello, /tp player)"
                                className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 font-mono"
                                disabled={isLoading}
                            />
                        </div>
                        <Button type="submit" disabled={isLoading || !command.trim()} className="bg-green-600 hover:bg-green-700">
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        </Button>
                    </form>

                    {/* Controls */}
                    <div className="flex justify-between items-center pt-2">
                        <div className="text-sm text-slate-400">Press Enter to send command</div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={clearHistory}
                            className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                            disabled={responses.length === 0}
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Clear History
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Commands */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Quick Commands</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {commonCommands.map((cmd, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => setCommand(cmd)}
                                className="justify-start font-mono text-xs"
                                disabled={isLoading}
                            >
                                {cmd}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Command Statistics */}
            {responses.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Session Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-blue-600">{responses.length}</div>
                                <div className="text-sm text-muted-foreground">Total Commands</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-green-600">{responses.filter((r) => r.success).length}</div>
                                <div className="text-sm text-muted-foreground">Successful</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-red-600">{responses.filter((r) => !r.success).length}</div>
                                <div className="text-sm text-muted-foreground">Failed</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

import { Button, Form, InputGroup } from 'react-bootstrap';
import '@assets/components/GunSettingsComponent'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import SettingsContext from '@contexts/SettingsContext';
import { v4 as uuid } from 'uuid';
import browser from 'webextension-polyfill';

function GunSettingsComponent() {
    const [ip, setIP] = useState<string>("");
    const [port, setPort] = useState<string>("");
    const [hash, setHash] = useState<string>("");
    const { settings, setSettings } = useContext(SettingsContext);

    useEffect(() => {
        setHash(settings?.idHash ?? '');
        setIP(settings?.ipAddress ?? '');
        setPort(settings?.portAddress ?? '');
    }, [settings]);

    const handleChangeIP = (event: ChangeEvent<HTMLInputElement>) => {
        setIP(event?.target?.value);
    }

    const handleChangePort = (event: ChangeEvent<HTMLInputElement>) => {
        setPort(event?.target?.value);
    }

    const handleGenerateHash = () => {
        const uniqueID = uuid();
        setHash(uniqueID.slice(0, 30));
    }

    const handleSubmit = () => {
        browser.storage.local.set({
            [window.location.hostname]: document.title,
        }).then(() => {
            browser.runtime.sendMessage(`Saved document title for ${window.location.hostname}`);
        });

        setSettings({ ...settings, ipAddress: ip, idHash: hash, portAddress: port });
    }

    return (
        <>
            <Form.Group className="mb-3 app-header">
                <InputGroup className="mb-3">
                    <InputGroup.Text>Server:</InputGroup.Text>
                    <Form.Control type="text" aria-label="IP address" onChange={handleChangeIP} value={ip}
                        pattern="((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$"
                    />
                    <Form.Control type="number" aria-label="Port" onChange={handleChangePort} value={port}
                        pattern="[0-9]+"
                    />
                </InputGroup>
                <Form.Text className="text-muted">
                    IP address will only get into the service worker after saving and refreshing.
                </Form.Text>
            </Form.Group>

            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="My personal hash" aria-label="My personal hash" value={hash} disabled />
                <Button variant="outline-secondary" id="hash-generator" onClick={handleGenerateHash}>Generate</Button>
            </InputGroup>

            <Button variant="primary" type="submit" onClick={handleSubmit}>Save and refresh</Button>
        </>
    )
}

export default GunSettingsComponent;
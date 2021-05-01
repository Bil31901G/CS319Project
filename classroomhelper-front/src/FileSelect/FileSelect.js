import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./FileSelect.css"

function buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

export default class FileDialogue extends React.Component {
    componentDidMount() {
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
    }

    render() {
        return <button className="button" href="" onClick={this.handleFileSelect}>Select files</button>
    }
}


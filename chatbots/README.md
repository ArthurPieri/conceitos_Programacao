# Rasa Chatbot

## Installation Guide

1. Install python3.x
    ```sh
    sudo apt update
    sudo apt install python3-dev python3-pip
    ```
2. Create a virtual environment
    ```sh
    python3 -m venv --system-site-packages ./venv
    source ./venv/bin/activate
    ```
3. Install Rasa:
    ```sh
    pip3 install rasa-x --extra-index-url https://pypi.rasa.com/simple
    ```
4. Tutorial
    <https://rasa.com/docs/rasa/user-guide/rasa-tutorial/>
5. Run
    ```sh
    rasa init
    ```
6. To train your rasa chatbot, run:
    ```sh
    rasa train
    ```
7. Talk to your Assistant
    ```sh
    rasa shell
    ```
8. Install Rasa X
    ```sh
    pip install rasa-x --extra-index-url https://pypi.rasa.com/simple
    ```
9. Start the rasa X
    ```
    rasa x
    ```

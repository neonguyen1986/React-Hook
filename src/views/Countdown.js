import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
    state = {
        count: 10
    }

    //khi vừa chạy xong render, tiếp theo sẽ chạy vào đây
    //setInterval nghĩa là sau n giây sẽ chạy hàm bên trong setInterval 1 lần
    //như vậy quá trình sẽ là vào Render, sau đó vào DidMount và bị lặp vô hạn
    //Vậy làm sao để dừng lại?
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            })
        }, 1000);
    }

    //preState là State trước khi bị update gần nhất
    //hàm DidUpdate sẽ được chạy sau khi Render bất kỳ
    //như vậy quá trình chạy sẽ như sau
    //lần 1: Render>>(1)DidMount>>Render>>DidUpdate>>(1)
    //Vậy để ngưng lặp vô hạn ta sẽ set đk để clearInterval trong DidUpdate
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                this.props.onTimeUp();//gọi từ cha
            }
        }
    }


    render() {
        return (
            <div>
                Class: {this.state.count}
            </div>
        )
    }
}



//Viết theo kiểu Hook
const NewCowntDown = (props) => {
    const [count, setCount] = useState(10)

    useEffect(() => {

        if (count === 0) {
            props.onTimeUp();
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count]);

    return (
        <div>
            Hook: {count}
        </div>
    )
}

export { CountDown, NewCowntDown };
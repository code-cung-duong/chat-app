import {
    FormOutlined,
    HomeOutlined,
    Loading3QuartersOutlined,
    SendOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import {
    Button,
    Dropdown,
    Form,
    Input,
    Menu
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { delay } from 'lodash';
import React, {
    useCallback,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import { AppContext } from '../../context/AppProvider';
import { AuthContext } from '../../context/AuthProvider';
import firebase, { db } from '../../firebase/Config';
import { addDocuments } from '../../firebase/Service';
import UseFirestore from '../../hooks/UseFirestore';
import IMessage from './IMessage ';
import Message from './Message';
import OutRoom from './OutRoom';
import Seen from './Seen';


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  box-shadow: -3px 13px 6px -10px rgb(230 230 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }

  .load{
    fontSize: '56px',
    color: '#08c',
    position: 'absolute',
    top: '50%',
    left: '50%'
  }

  .settingIcon{
      font-size: '15px';
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;
  margin-top: 10px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;


function ChatWindow() {
    const [inputValue, setInputValue] = useState('');
    const [form1] = useForm();
    const {
        selectedRoom,
        selectedRoomId,
        setSelectedRoomId,
        setIsInviteMemberVisible,
        setIsShowMembersVisible,
        setIsEditRoomVisible,
        members
    } = useContext(AppContext);

    const {
        user: {
            uid,
            displayName,
            photoURL
        }
    } = useContext(AuthContext);

    const inputRef = useRef(null);
    const [isLoadingMes, setIsLoadingMes] = useState(true);
    const messageListRef = useRef(null);
    const [tab, setTab] = useState('');

    const messagesCondition = useMemo(() => {
        return { fieldName: 'roomId', operator: '==', compareValue: selectedRoomId };
    }, [selectedRoomId])

    const messages = UseFirestore('messages', messagesCondition);


    useEffect(() => {
        setIsLoadingMes(true);
        if (selectedRoomId) {
            inputRef.current.focus();
        }


        const un = db.collection('messages').where('roomId', '==', selectedRoomId).get().then((snap) => {
            snap.docs.map((doc) => {
                const data = doc.data().userSeen.map((m) => (m.uid));
                if (!data.includes(uid)) {
                    db.collection('messages').doc(doc.id).update({
                        userSeen: [
                            ...doc.data().userSeen, {
                                uid: uid,
                                displayName: displayName,
                                photoURL: photoURL,
                                timeSeen: new Date()
                            }
                        ]
                    })
                }

            })
        })
        return un;
    }, [selectedRoomId])

    const userRef = firebase.firestore().doc('/users/' + uid);

    var isOfflineForFirestore = useMemo(() => ({ status: 'c', last_changed: firebase.firestore.FieldValue.serverTimestamp() }), []);

    var isOnlineForFirestore = useMemo(() => ({ status: 'a', last_changed: firebase.firestore.FieldValue.serverTimestamp() }), []);

    var isAwayForFirestore = useMemo(() => ({ status: 'b', last_changed: firebase.firestore.FieldValue.serverTimestamp() }), []);

    useEffect(() => {
        const abc = firebase.database().ref('.info/connected').on('value', function (snapshot) {
            if (snapshot?.val() === false && uid !== undefined) {
                userRef?.update(isOfflineForFirestore);
                return;
            };
            // console.log(uid);
            if (uid === undefined && tab === 'visible') { // console.log('set offline');
                userRef?.update(isOfflineForFirestore);
            } else if (uid !== undefined && tab !== 'hidden') { // console.log('set online');
                firebase.database().ref('/status/' + uid)?.onDisconnect().update(isOfflineForFirestore).then(function () {
                    userRef?.update(isOnlineForFirestore);
                });
            }
        });

        return abc;


    }, [uid])


    window.addEventListener("unload", () => {
        userRef?.update(isOfflineForFirestore);
    })

    const abc = useCallback(() => {
        if (uid === undefined) {
            userRef?.update(isOfflineForFirestore);
        } else if (document.visibilityState === 'hidden' && tab !== 'hidden' && uid !== undefined) {
            userRef?.update(isAwayForFirestore);
            setTab('hidden');
        } else if (document.visibilityState === 'visible' && tab !== 'visible' && uid !== undefined) {
            setTab('visible');
            userRef?.update(isOnlineForFirestore);
        }

        const un = db.collection('messages').where('roomId', '==', selectedRoomId).get().then((snap) => {
            snap.docs.map((doc) => {
                const data = doc.data().userSeen.map((m) => (m.uid));
                if (!data.includes(uid) && document.visibilityState === 'visible') {
                    db.collection('messages').doc(doc.id).update({
                        userSeen: [
                            ...doc.data().userSeen, {
                                uid: uid,
                                displayName: displayName,
                                photoURL: photoURL,
                                timeSeen: new Date()
                            }
                        ]
                    })
                }

            })
        })
        return un;

    }, []);

    useEffect(() => {
        document.addEventListener('visibilitychange', abc, false);
    }, [abc])


    useEffect(() => {
        delay(() => {
            setIsLoadingMes(false);
        }, 10, '');

    }, [messages])


    useEffect(() => {
        const abc = db.collection('notifys').doc(uid).onSnapshot((snap) => {
            const oldData = snap?.data()?.roomId;
            if (selectedRoomId && oldData !== undefined) {
                db.collection('notifys')?.doc(uid).update({
                    roomId: [...Array.from(oldData).filter((u) => u !== selectedRoomId)]
                })
                // console.log("da xem");
            }
            return abc;
        })
        return abc;
    }, [selectedRoomId])

    useLayoutEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
        // console.log("layout");
    })

    // const users = UseFirestore('users', '');
    const loadMessage = () => {
        const load = messages.map((ms) => {
            return ms.uid === uid ? <div key={
                ms.id
            }>
                <IMessage text={
                    ms.text
                }
                    photoURL={
                        ms.photoURL
                    }
                    displayName={
                        ms.displayName
                    }
                    createdAt={
                        ms.createAt
                    } /> {
                    ms.id === messages[messages.length - 1].id ? <Seen users={
                        ms.userSeen.filter((ds) => ds.uid !== uid)
                    } /> : <></>
                } </div> : <div key={
                    ms.id
                }>
                <Message text={
                    ms.text
                }
                    photoURL={
                        ms.photoURL
                    }
                    displayName={
                        ms.displayName
                    }
                    createdAt={
                        ms.createAt
                    } /> {
                    ms.id === messages[messages.length - 1].id ? <Seen users={
                        ms.userSeen.filter((ds) => ds.uid !== uid)
                    } /> : <></>
                } </div>


        })
        return load;

    }

    useEffect(() => {
        const abc = db.collection('notifys').doc(uid).onSnapshot((snap) => { // console.log("tin nhan moi");
            const oldData = snap?.data()?.roomId;
            if (document.visibilityState !== 'visible') {
                document.getElementsByClassName("audio")[0]?.play();
            }
            if (oldData != undefined) {
                document.title = oldData.length === 0 ? 'Fake Messenger' : "(" + oldData.length + ") Fake Messenger";
                db.collection('messages').orderBy('createAt').get().then((snap) => {
                    const all = snap.docs.map((doc) => (doc.data()));
                    const last = all[all.length - 1];
                    if (last !== undefined) {
                        var a = new Notification("Tin nhắn từ " + last?.displayName+"  (Tự đóng sau 5s)", {
                            tag: "<h1>",
                            icon: last.photoURL,
                            renotify: false,
                            body: last?.text
                        })

                        a.onshow = ()=>{
                            setTimeout(() => {
                                a.close();
                            }, 5000);
                        }
                    }


                })
            }
            return abc;
        })
        return abc;
    }, [])


    const loadingListMessage = () => (isLoadingMes === true ? <Loading3QuartersOutlined spin
        style={
            {
                fontSize: '56px',
                color: '#08c',
                position: 'absolute',
                top: '45%',
                left: '50%'
            }
        } /> : <MessageListStyled className="listMessage"
            ref={messageListRef}>
        {
            loadMessage()
        } </MessageListStyled>)


    const handleOnSubmit = () => {
        if (inputValue.trim().length) {

            addDocuments('messages', {
                text: inputValue,
                uid,
                photoURL,
                displayName,
                roomId: selectedRoomId,
                userSeen: [
                    {
                        uid: uid,
                        displayName: displayName,
                        photoURL: photoURL,
                        timeSeen: new Date()
                    }
                ]
            });


            members?.filter((u) => u.uid !== uid).forEach((user) => {
                db.collection('notifys')?.doc(user.id).get().then((doc) => {
                    db.collection('notifys')?.doc(user.id).update({
                        roomId: [
                            ...doc.data().roomId,
                            selectedRoomId
                        ],
                        createAt: firebase.firestore.FieldValue.serverTimestamp()
                    })
                });
            })

            form1.setFieldsValue({ message: '' });
            setInputValue('');
            inputRef.current.focus();
        }
    }


    const handleOnChange = (e) => {
        if (e.target.value !== '') {
            setInputValue(e.target.value);
        }
    }

    useEffect(() => {
        const un = db.collection('messages').where('roomId', '==', selectedRoomId).get().then((snap) => {
            snap.docs.map((doc) => {
                const data = doc.data().userSeen.map((m) => (m.uid));
                if (!data.includes(uid) && document.visibilityState === 'visible') {
                    db.collection('messages').doc(doc.id).update({
                        userSeen: [
                            ...doc.data().userSeen, {
                                uid: uid,
                                displayName: displayName,
                                photoURL: photoURL,
                                timeSeen: new Date()
                            }
                        ]
                    })
                }

            })
        })
        return un;
    }, [messages])

    const menu = useMemo(() => (
        <Menu>
            <Menu.Item onClick={
                () => setSelectedRoomId('')
            }
                icon={<HomeOutlined />}
                key="3">Trang chủ</Menu.Item>
            <Menu.Item onClick={
                () => setIsEditRoomVisible(true)
            }
                icon={<FormOutlined />}
                key="1">Đổi thông tin nhóm</Menu.Item>
            <Menu.Item onClick={
                () => setIsShowMembersVisible(true)
            }
                icon={<UserOutlined />}
                key="1">Xem thành viên</Menu.Item>
            <Menu.Item onClick={
                () => setIsInviteMemberVisible(true)
            }
                icon={<UsergroupAddOutlined />}
                key="2">Thêm bạn bè</Menu.Item>

            <OutRoom />


        </Menu>
    ), [setIsShowMembersVisible, setIsInviteMemberVisible, setSelectedRoomId]);

    const noSelectRoom = () => (


        <iframe style={
            {
                width: '100%',
                height: '100%',
                bordered: 'none',
                border: '0'

            }
        }
            src="https://cuberun.adamkarlsten.com/"
            title="Chào bạn Hương Min nhé 🥰"></iframe>
    )

    const sendForm = () => (
        <FormStyled form={form1}>
            <Form.Item name='message'>
                <Input ref={inputRef}
                    onChange={handleOnChange}
                    onPressEnter={handleOnSubmit}
                    placeholder='Aa...'
                    bordered={false}
                    autoComplete='off' />
            </Form.Item>
            <Button style={
                {
                    width: '40px',
                    color: 'blue'
                }
            }
                icon={
                    <SendOutlined
                        className="settingIcon" />
                }
                onClick={handleOnSubmit}></Button>
        </FormStyled>
    )

    const mainLayout = () => (
        <WrapperStyled>
            <HeaderStyled>
                <div className='header__info'>
                    <p className='header__title'>
                        {
                            !selectedRoom ? '' : selectedRoom.name
                        }</p>
                    <span className='header__description'>
                        {
                            !selectedRoom ? '' : selectedRoom.description
                        }</span>
                </div>
                <ButtonGroupStyled>
                    <Dropdown.Button style={
                        { bordered: 'none' }
                    }
                        icon={<SettingOutlined />}
                        overlay={menu}></Dropdown.Button>
                </ButtonGroupStyled>
            </HeaderStyled>

            <ContentStyled> {
                loadingListMessage()
            }

                {
                    sendForm()
                } </ContentStyled>
        </WrapperStyled>
    )


    return (
        <>
            <ReactAudioPlayer src="mess.mp3" className="audio" /> {
                selectedRoomId ? <>{
                    mainLayout()
                }</> : <>{
                    noSelectRoom()
                }</>
            }</>
    )
}
export default ChatWindow;

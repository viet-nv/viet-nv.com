---
title: 'Window Subsystem for Linux: Đồng nhất môi trường làm việc và chơi game cho lập trình viên'
excerpt: 'Bạn thích code trên <b>Ubuntu</b> nhưng lại muốn chơi game trên <b>Window</b>. Bạn thích code trên <b>Ubuntu</b> nhưng lại cần làm <b>excel</b>... Bạn cài dual boot Window và Ubuntu để đáp ứng những nhu cầu trên. Tuy nhiên bạn thấy bất tiện mỗi lần switch qua lại những 2 nền tảng. Giờ đây bạn không cần phải lo những vấn đề đó nữa vì đã có <b>Window Subsystem for Linux (WSL)</b>.'
tags: ['#ubuntu', '#window', '#wsl2']
date: '2020-08-01T02:32:23.838Z'
ogImage: '/assets/blog/wsl/wsl2.jpg'
---

![Cover Image](/assets/blog/wsl/wsl2.jpg)

<center>
Ảnh: <a href="https://scotch.io/bar-talk/trying-the-new-wsl-2-its-fast-windows-subsystem-for-linux" class="text-blue-700 hover:text-blue-600" target="_blank">scotch.io</a>
</center>

Bạn thích code trên <b>Ubuntu</b> nhưng lại muốn chơi game trên <b>Window</b>. Bạn thích code trên <b>Ubuntu</b> nhưng lại cần làm <b>excel</b>... Bạn cài dual boot Window và Ubuntu để đáp ứng những nhu cầu trên. Tuy nhiên bạn thấy bất tiện mỗi lần switch qua lại những 2 nền tảng. Giờ đây bạn không cần phải lo những vấn đề đó nữa vì đã có <b>Window Subsystem for Linux (WSL)</b>.

Theo kết quả khảo sát của [Stackoverflow](https://insights.stackoverflow.com/survey/2020#technology-platforms) thì có tới 55% lập trình viên đang sử dụng <b>Linux</b> là hệ điều hành chính. Mình cũng là một developer nằm trong 55% nói trên. Tuy nhiên với bản tính ham chơi thì cá nhân mình thường xuyên sử dụng Window để có thể chơi game giải trí cùng bạn bè sau những giờ code căng não :v. Để đáp ứng nhu cầu trên mình đã cài dual boot win10 và ubuntu. Nhưng thực sự rất khổ khi mà đang chơi game sếp gọi: <br/>

```
- alo Việt à. Check gấp giúp anh cái này, bla, bla, bla...
- Dạ okie a
```

Vậy là lại restart máy chuyển qua ubuntu phích bấc. Fix xong bug đang ung dung lướt youtube thì thằng làm cùng nhắn tin:

```
- Ê, làm ván không?
- Okie đợi xíu
```

Restart máy phát nữa chuyển qua Window nào :v
<br/>
Đã thấy chíu khọ chưa =.=<br/>
Nhưng thật may, những tháng ngày đó đã rời kha mình kể từ khi mình khám phá ra <b>Window Subsystem for Linux (wsl2)</b> (Trong bài này mình chỉ nhắc đến wsl version 2 chứ không dùng version 1 nhé. Nếu bạn muốn biết vì sao mình lại dùng wsl2 mà không phải wsl thì googling thử xem nó có ưu điểm gì nhé :P). Trong bài viết này, mình sẽ chia sẻ cùng các bạn mình đã sử dụng wsl như thế nào nhé.

## Window Subsystem for Linux là gì?

Hiểu đơn giản thì đây là tính năng cho phép bạn sử dụng linux trên window. <br/>
Cụ thể chi tiết thì các bạn có thể xem thêm tại <a href="https://docs.microsoft.com/en-us/windows/wsl/" class="text-blue-600 hover:text-blue-700" target="_blank">đây</a> nhé.

## Cài đặt WSL2

Cái này thì dễ quá rồi nhé. Cứ làm theo <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10" class="text-blue-600 hover:text-blue-700" target="_blank">link này</a> là ok nhé ;)

## Sử dụng như nào nhỉ???

Sau khi cài đặt xong thì bạn chỉ cần tải 1 distro yêu thích từ store của win 10 và sau đó bạn có thể sử dụng linux ngay giữa lòng win 10.
![ubuntu 20 default](/assets/blog/wsl/wsl-default.png)
<br/>
Nhìn cái giao diện trên cứ ngu ngu thế nào ấy nhỉ. Dùng thế này chán òm. Quay về ubuntu thuần nào. Ấy từ từ nào các bạn ơi :v

### Customize giao diện terminal

Để sử dụng WSL bạn có thể dùng các loại terminal khác nhau (Alacrity, Kitty, Cmder, cywin,...). Tuy nhiên theo khuyến nghị của mình thì các bạn nên dùng [Window terminal](https://github.com/microsoft/terminal) nhé (Tải từ store về sử dụng rất dễ dàng nhé :v)<br/>
Đối với window terminal thì đã support sẵn các option cũng như cài đặt để truy cập thẳng đến wsl khi khởi động. Còn với các terminal khác thì bạn có thể gõ lệnh `wsl` để access vào wsl nhé.

### Ơ đấy là terminal sử dụng thế còn IDE code thì sao?

Với mình thì chỉ cần terminal như vậy là đủ code rồi vì bản thân mình là 1 vimmer nên everythings on terminal thôi :v :v :v
<br/>
Còn với các bạn quen việc sử dụng Visual Studio Code thì có thể sử dụng extentions Remote - WSL nhé. Max xịn luôn đó :v
<br/>
Thôi chắc mình chỉ chém gió sơ sơ để bạn nào yêu thích có thể vọc vạch rồi dùng như mình nhé =)). Đến đây cũng chả biết viết gì nữa rồi. Chúc các bạn có những trải nghiệm thú vị với WSL nhé. Nếu thấy hay thì hãy ấn like, share và subcribe kênh của mình nhé. Ý lộn, quen miệng khi xem mấy kênh youtube :D, Nếu thấy hay hoặc không hay thì hãy góp ý cho mình qua các kênh liên lạc mình đã để ở homepage nhé. Thanks for Reading!!! ^^

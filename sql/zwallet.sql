-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2020 at 03:58 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `code_otp`
--

CREATE TABLE `code_otp` (
  `id_code` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `code_otp`
--

INSERT INTO `code_otp` (`id_code`, `email`, `code`) VALUES
(1, 'yusup.junaedi97@gmail.com', 404824);

-- --------------------------------------------------------

--
-- Table structure for table `data_user`
--

CREATE TABLE `data_user` (
  `id_data_user` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `no_hp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_user`
--

INSERT INTO `data_user` (`id_data_user`, `user_id`, `amount`, `no_hp`) VALUES
(1, 1, 2000000, '087820500512'),
(2, 9, 3500000, '087725321456');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id_history` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_user_history` int(11) NOT NULL,
  `transaction` varchar(100) NOT NULL,
  `Amount` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id_history`, `user_id`, `id_user_history`, `transaction`, `Amount`, `date`) VALUES
(60, 1, 24, 'Subscription', 35000, '2020-09-30 14:37:15'),
(61, 24, 1, 'Transfer', 35000, '2020-09-30 14:37:15'),
(62, 31, 1, 'Subscription', 10000, '2020-10-01 01:53:35'),
(63, 1, 31, 'Transfer', 10000, '2020-10-01 01:53:35'),
(64, 31, 33, 'Subscription', 10000, '2020-10-01 02:57:48'),
(65, 33, 31, 'Transfer', 10000, '2020-10-01 02:57:48'),
(66, 31, 33, 'Subscription', 20000, '2020-10-01 03:19:10'),
(67, 33, 31, 'Transfer', 20000, '2020-10-01 03:19:10'),
(68, 31, 33, 'Subscription', 5000, '2020-10-01 03:25:47'),
(69, 33, 31, 'Transfer', 5000, '2020-10-01 03:25:47'),
(70, 31, 33, 'Subscription', 15000, '2020-10-01 03:28:57'),
(71, 33, 31, 'Transfer', 15000, '2020-10-01 03:28:57'),
(72, 31, 1, 'Subscription', 10000, '2020-10-01 15:22:06'),
(73, 1, 31, 'Transfer', 10000, '2020-10-01 15:22:06'),
(74, 31, 1, 'Subscription', 5000, '2020-10-05 15:17:37'),
(75, 1, 31, 'Transfer', 5000, '2020-10-05 15:17:37'),
(76, 33, 31, 'Subscription', 35000, '2020-10-06 18:29:46'),
(77, 31, 33, 'Transfer', 35000, '2020-10-06 18:29:46'),
(78, 31, 33, 'Subscription', 5000, '2020-10-07 14:29:18'),
(79, 33, 31, 'Transfer', 5000, '2020-10-07 14:29:18'),
(80, 31, 26, 'Subscription', 5000, '2020-10-07 14:35:09'),
(81, 26, 31, 'Transfer', 5000, '2020-10-07 14:35:09'),
(82, 31, 1, 'Subscription', 3000, '2020-10-07 14:54:57'),
(83, 1, 31, 'Transfer', 3000, '2020-10-07 14:54:57'),
(84, 31, 27, 'Subscription', 2000, '2020-10-07 16:53:05'),
(85, 27, 31, 'Transfer', 2000, '2020-10-07 16:53:05'),
(86, 1, 30, 'Subscription', 20000, '2020-10-08 03:57:47'),
(87, 30, 1, 'Transfer', 20000, '2020-10-08 03:57:47'),
(88, 1, 26, 'Subscription', 15000, '2020-10-08 04:00:37'),
(89, 26, 1, 'Transfer', 15000, '2020-10-08 04:00:37'),
(90, 1, 31, 'Subscription', 15000, '2020-10-08 09:16:40'),
(91, 31, 1, 'Transfer', 15000, '2020-10-08 09:16:40'),
(92, 31, 29, 'Subscription', 120000, '2020-11-07 02:39:56'),
(93, 29, 31, 'Transfer', 120000, '2020-11-07 02:39:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `no_hp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `email`, `password`, `pin`, `image`, `amount`, `no_hp`) VALUES
(1, 'Yusup Junaedi', 'yusup.junaedi97@gmail.com', '$2b$10$aqvn7yjdI5mzn4FGIkjCUuRoH2uIHyYkr/e5GtslIf6V0bp1PbxzC', '632541', 'http://34.205.65.98:8000/images/1602082347863-image.jpg', 85000, '087823455567'),
(23, 'zaki zull', 'zaki@gmail.com', '$2b$10$k14uRJOdQ8n1kTN6KNg94OffeTEDzO24NhgrIiCJwtJAn7aSCW4uC', '', 'http://34.205.65.98:8000/images/1601571285617-image.jpg', 100000, '0822888876744'),
(24, 'Nendy Yusup', 'nendy@gmail.com', '$2b$10$U1xAoOzX/nzfAIYHQ0agMOFote6MqDLOEtxC3agGAHU1BoHKz323S', '', 'http://34.205.65.98:8000/images/1601576114648-image.jpg', 135000, '087722223455'),
(25, 'Zaki ZUlikifli', 'zaki123@gmail.com', '$2b$10$RzILjX/4C8JLulSqmPNKe.joDEYgu5ytvgqPYaJLLNBjyy3xNZtVm', '', 'http://34.205.65.98:8000/images/1601606436577-image.jpg', 100000, '087820500512'),
(26, 'amel', 'amel@gmail.com', '$2b$10$ACGqZjNrnUDSFbJ0LgrBl.ZW91gCNIi6.s2DgTH5uVByLUIluh1IW', '', 'http://34.205.65.98:8000/images/1601608076853-image.jpg', 100000, '087766665677'),
(27, 'Irpan Maulana', 'irpan@gmail.com', '$2b$10$UiV7GpNW3nafcZFJ8Bw0dOVeqCHKxzzqkUoJKeF5TlIQyTLjsgFuy', '', 'http://34.205.65.98:8000/images/radu-florin-4_QFycgpC4c-unsplash.jpg', 100000, '087855555566'),
(29, 'Nawirudin', 'nawi@gmail.com', '$2b$10$8FFqvxsZA.egLNk3uaRIj..hFTME6uAjxJMVGUHOtOVUouhfjkAb2', '632541', 'http://34.205.65.98:8000/images/logan-weaver-IVXoVHXqVCY-unsplash.jpg', 100000, '08783333339999'),
(30, 'Wildan ', 'windan@gmail.com', '$2b$10$cp.c3iOYThDucWG2.GbyXuZ0cAh4kclGKMRu5/gSTIuKKVbZY6tfe', '632214', 'http://34.205.65.98:8000/images/allef-vinicius-3TSyMrZj5ik-unsplash.jpg', 100000, '085221000888'),
(31, 'Gana Ginting', 'gana@gmail.com', '$2b$10$1aa0/oC7KTFKubV1BW4KxeDVQ674NyD11v1pYizCh84zoItE4J4jq', '123456', 'http://34.205.65.98:8000/images/engin-akyurt-_YR7sG21yGE-unsplash.jpg', 300000, '08522400009876'),
(32, 'Taufiq Widi', 'taufiq@gmail.com', '$2b$10$n6MHx7ehQR17Dw5t4sjpS.HSHnEbfKXmh3D8Ee3MJOfzEpzfLhB9u', '963258', 'http://34.205.65.98:8000/images/emir-saldierna-oGcAzDcAXWU-unsplash.jpg', 100000, '0878444564578'),
(33, 'Solehudin', 'soleh@gmail.com', '$2b$10$kySOfWiG9VUuQ7AVAFtDvOUTjv4cAjmoqmoAJHNevMRNjiaqrq0Ea', '632541', 'http://34.205.65.98:8000/images/ludovic-migneault-4uj3iZ5m084-unsplash.jpg', 50000, ''),
(35, 'Rizal Ramadhan', 'rizal@gmail.com', '$2b$10$sme2rgvNvuDoi0.oTjLNtu/xwSe..3Kvvqw4qMNJ8cOGtlE8TgeEe', '632541', 'http://34.205.65.98:8000/images/albert-dera-ILip77SbmOE-unsplash.jpg', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `code_otp`
--
ALTER TABLE `code_otp`
  ADD PRIMARY KEY (`id_code`);

--
-- Indexes for table `data_user`
--
ALTER TABLE `data_user`
  ADD PRIMARY KEY (`id_data_user`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id_history`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `code_otp`
--
ALTER TABLE `code_otp`
  MODIFY `id_code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `data_user`
--
ALTER TABLE `data_user`
  MODIFY `id_data_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id_history` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
